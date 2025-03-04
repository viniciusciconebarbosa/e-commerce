"use client";

import { useState } from "react";
import * as Material from "@mui/material";
import { ShoppingCart, Menu as MenuIcon, LightMode, DarkMode, Person } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { useCart } from "@/components/cart-provider";
import Image from "next/image";
import modernPhotoroom from "@/assets/modern-Photoroom.png";


interface NavLink {
  title: string;
  path: string;
}

interface CartItem {
  quantity: number;
  // outras propriedades do item do carrinho
}

const navLinks: NavLink[] = [
  { title: "Home", path: "/" },
  { title: "Produtos", path: "/" },
  { title: "Sobre", path: "/about" },
  { title: "Contato", path: "/contact" },
];

export default function Header() {
  const { mode, toggleColorMode } = useTheme();
  const { cart } = useCart() as { cart: CartItem[] };
  const pathname = usePathname() || "";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = Material.useMediaQuery("(max-width:900px)");

  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Material.AppBar position="fixed" color="default" elevation={1} sx={{   paddingRight: "7vw", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Material.Container maxWidth="lg">
        <Material.Toolbar disableGutters sx={{ justifyContent: isMobile ? "space-between" : "space-between" }}>
          <Link href="/" passHref>
            <Material.Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
            </Material.Typography>
          </Link>
              <Image style={{ width: isMobile ? '40%' : '13%', height: "20%" }} src={modernPhotoroom} alt={"logo-Modern"}></Image>

          {isMobile ? (
            <>
              <Material.Box sx={{ display: "flex", alignItems: "center" }}>
                <Material.IconButton color="inherit" component={Link} href="/cart" sx={{ ml: 1 }}>
                  <Material.Badge badgeContent={cartItemsCount > 0 ? cartItemsCount : null} color="error">
                    <ShoppingCart />
                  </Material.Badge>
                </Material.IconButton>

                <Material.IconButton color="inherit" onClick={toggleColorMode} sx={{ ml: 1 }}>
                  {mode === "dark" ? <LightMode /> : <DarkMode />}
                </Material.IconButton>

                <Material.IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ ml: 1 }}>
                  <MenuIcon />
                </Material.IconButton>
              </Material.Box>

              <Material.Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Material.Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                  <Material.List>
                    {navLinks.map((link) => (
                      <Material.ListItem key={link.title} disablePadding>
                        <Material.ListItemButton component={Link} href={link.path} selected={pathname === link.path}>
                          <Material.ListItemText primary={link.title} />
                        </Material.ListItemButton>
                      </Material.ListItem>
                    ))}
                  </Material.List>
                  <Material.Divider />
                  <Material.List>
                    <Material.ListItem disablePadding>
                      <Material.ListItemButton component={Link} href="/login">
                        <Material.ListItemText primary="Login" />
                      </Material.ListItemButton>
                    </Material.ListItem>
                    <Material.ListItem disablePadding>
                      <Material.ListItemButton component={Link} href="/register">
                        <Material.ListItemText primary="Register" />
                      </Material.ListItemButton>
                    </Material.ListItem>
                  </Material.List>
                </Material.Box>
              </Material.Drawer>
            </>
          ) : (
            <>
             <Material.Box sx={{ display: "flex", gap: 4 }}>
                {navLinks.map((link) => (
                  <Material.Typography
                    key={link.title}
                    component={Link}
                    href={link.path}
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: pathname === link.path ? "100%" : "0",
                        height: "2px",
                        bottom: "-4px",
                        left: 0,
                        bgcolor: "primary.main",
                        transition: "width 0.3s",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {link.title}
                  </Material.Typography>
                ))}
              </Material.Box>

              <Material.Box sx={{ display: "flex", alignItems: "center" }}>
                <Material.IconButton color="inherit" onClick={toggleColorMode} sx={{ ml: 1 }}>
                  {mode === "dark" ? <LightMode /> : <DarkMode />}
                </Material.IconButton>

                <Material.IconButton color="inherit" component={Link} href="/cart" sx={{ ml: 1 }}>
                  <Material.Badge badgeContent={cartItemsCount > 0 ? cartItemsCount : null} color="error">
                    <ShoppingCart />
                  </Material.Badge>
                </Material.IconButton>

                <Material.Button variant="outlined" startIcon={<Person />} component={Link} href="/login" sx={{ ml: 2 }}>
                  Login
                </Material.Button>
              </Material.Box>
            </>
          )}
        </Material.Toolbar>
      </Material.Container>
    </Material.AppBar>
  );
}