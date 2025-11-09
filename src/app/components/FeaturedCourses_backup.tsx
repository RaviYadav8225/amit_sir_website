// Fallback re-export to avoid build errors when original slider component is missing.
// This file was previously pointing to a non-existent `FeaturedCoursesSlider` which
// caused the production build to fail with a TypeScript module not found error.

export { default } from './FeaturedCourses';