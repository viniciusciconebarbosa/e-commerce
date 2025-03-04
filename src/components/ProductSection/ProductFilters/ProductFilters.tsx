import {
    TextField,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
  } from "@mui/material";
  import { Search } from "@mui/icons-material";
  
  interface ProductFiltersProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    categoryFilter: string;
    setCategoryFilter: (category: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    categories: string[];
  }
  
  export function ProductFilters({
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    sortBy,
    setSortBy,
    categories,
  }: ProductFiltersProps) {
    return (
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <TextField
          fullWidth
          placeholder="Procurar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
        />
  
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Categoria</InputLabel>
          <Select
            value={categoryFilter}
            label="Categoria"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <MenuItem key={categories[0]} value={categories[0]}>
                Todos
              </MenuItem>
              <MenuItem key={categories[1]} value={categories[1]}>
                Roupas masculinas
              </MenuItem>
              <MenuItem key={categories[2]} value={categories[2]}>
                Joias
              </MenuItem>
              <MenuItem key={categories[3]} value={categories[3]}>
                Eletronicos
              </MenuItem>
              <MenuItem key={categories[4]} value={categories[4]}>
                Roupas femininas
              </MenuItem>
          </Select>
        </FormControl>
  
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Ordenar por</InputLabel>
          <Select
            value={sortBy}
            label="Ordenar por"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="default">Padrão</MenuItem>
            <MenuItem value="price-low">Preço: Menor para maior</MenuItem>
            <MenuItem value="price-high">Preço: Maior para menor</MenuItem>
            <MenuItem value="rating">Bem avaliados</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }