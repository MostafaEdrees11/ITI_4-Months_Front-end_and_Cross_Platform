import Product from "@/types/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

interface props {
  product: Product;
}

export default function ProductCard({ product }: props) {
  return (
    <Card
      key={product.id}
      sx={{
        borderRadius: "16px",
        backgroundColor: "#9CCFFF",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        },
      }}
    >
      <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={120}
        />
        <CardContent sx={{ mx: "8px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h6">
              {product.title}
            </Typography>
            <Typography variant="h6">${product.price}</Typography>
          </Box>

          <Typography variant="body2">{product.description}</Typography>
        </CardContent>
      </Link>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", mb: "4px" }}
      >
        <Button variant="contained" color="success">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
