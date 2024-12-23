import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const LatestBlog = () => {
  const blogPosts = [
    {
      imgSrc: "https://themewagon.github.io/eiser/img/b1.jpg",
      imgAlt: "Man wearing a pink blazer",
      author: "By Admin",
      comments: "2 Comments",
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      description:
        "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.",
      link: "#",
    },
    {
      imgSrc: "https://themewagon.github.io/eiser/img/b2.jpg",
      imgAlt: "Woman wearing blue jeans",
      author: "By Admin",
      comments: "2 Comments",
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      description:
        "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.",
      link: "#",
    },
    {
      imgSrc: "https://themewagon.github.io/eiser/img/b3.jpg",
      imgAlt: "Woman wearing a watch",
      author: "By Admin",
      comments: "2 Comments",
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      description:
        "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.",
      link: "#",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        LATEST BLOG
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        paragraph
      >
        Bring called seed first of third give itself now ment
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                alt={post.imgAlt}
                height="200"
                image={post.imgSrc}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.author} - {post.comments}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: 1 }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  {post.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href={post.link}
                  sx={{ textTransform: "none" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestBlog;
