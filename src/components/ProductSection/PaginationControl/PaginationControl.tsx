import { Box, Pagination } from "@mui/material";

interface PaginationControlsProps {
  totalPages: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export function PaginationControls({
  totalPages,
  page,
  handlePageChange,
}: PaginationControlsProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" />
    </Box>
  );
}