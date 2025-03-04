"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useCart } from "../cart-provider";
import { ProductFilters } from "./ProductFilters/ProductFilters";
import { ProductList } from "./ProductList/ProductList";
import { PaginationControls } from "./PaginationControl/PaginationControl";

export default function ProductListPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);
  const { addToCart } = useCart();

  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        categoryFilter === "all" || product.category === categoryFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating.rate - a.rating.rate;
        default:
          return 0;
      }
    });

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (error) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box>
 
    
        <ProductFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
        />

        <ProductList
          products={paginatedProducts}
          loading={loading}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleAddToCart={handleAddToCart}
        />
     
      {totalPages > 1 && (
        <PaginationControls
          totalPages={totalPages}
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </Box>
  );
}
