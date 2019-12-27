// Centralized logic

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

// To validate the course entered
function validateCourse(course) {
  if (!course.title) return "Title is required.";
  if (!course.authorId) return "Author is required.";
  if (!course.category) return "Category is required.";
  return "";
}

module.exports = { createSlug, validateCourse };
