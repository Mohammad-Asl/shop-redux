import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/features/CartSlice";
import { Grid } from "@mui/material";

export default function Item() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  
  return (
    <Grid
      item
      container
      alignItems='center'
      justifyContent="center"
      gap={4}
      columnSpacing={5}
      rowSpacing={3}
      columns={{ xs: 7, sm: 9, md:17 , lg:14 , xl: 16}}
    >
      {items.map((item) => (
        <Grid item xs={4} sm={4} md={4} lg={4} xl={3} key={item.id}>
          <Card xs={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
            <CardOverflow>
              <AspectRatio xs={{ minWidth: 200 }}>
                <img src={item.img} loading="lazy" alt="Nike" className="object-scale-down"/>
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
              >
                {item.title}
              </Link>
              <Typography level="body-xs">{item.des}</Typography>

              <Typography
                className="flex items-center justify-between"
                level="title-lg"
                sx={{ mt: 2, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    Lowest price
                  </Chip>
                }
              >
                {item.price}
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button
                onClick={() => dispatch(addToCart(item))}
                variant="solid"
                color="success"
                size="lg"
              >
                Add to cart
              </Button>
            </CardOverflow>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
