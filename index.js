import express from 'express';

const app = express();
app.use(express.json());

const resources = [
  {
    id: 101,
    name: "Blackhawk Commons",
    category: "dining",
    building: "Blackhawk Commons",
    description: "Campus dining facility"
  },
  {
    id: 102,
    name: "Polk Library",
    category: "study",
    building: "Polk Library",
    description: "Library and study space"
  },
  {
    id: 103,
    name: "Reeve Union",
    category: "student-life",
    building: "Reeve Union",
    description: "Student activities and services"
  },
  {
    id: 104,
    name: "Student Health Center",
    category: "health",
    building: "Student Health Center",
    description: "Student health services"
  },
  {
    id: 105,
    name: "Campus Bookstore",
    category: "shopping",
    building: "Reeve Union",
    description: "Books and university merchandise"
  }
];

// Route 1: Find a resource using a path parameter
app.get('/resources/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      error: "Invalid resource ID"
    });
  }

  const resource = resources.find(item => item.id === id);

  if (!resource) {
    return res.status(404).json({
      error: "Resource not found"
    });
  }

  res.status(200).json(resource);
});

// Route 2: Search resources using a query parameter
app.get('/resources', (req, res) => {
  const { category } = req.query;

  if (category === undefined) {
    return res.status(200).json({
      count: resources.length,
      resources: resources
    });
  }

  if (typeof category !== 'string' || !category.trim()) {
    return res.status(400).json({
      error: "Please provide a valid category"
    });
  }

  const results = resources.filter(
    item => item.category.toLowerCase() === category.trim().toLowerCase()
  );

  if (results.length === 0) {
    return res.status(404).json({
      error: "No resources found for this category"
    });
  }

  res.status(200).json({
    category: category,
    count: results.length,
    resources: results
  });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Campus Resource Finder API running on port ${PORT}`);
});
