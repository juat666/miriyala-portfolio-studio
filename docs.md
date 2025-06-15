
# 📝 How to Update Your Portfolio Content (Beginner's Guide)

Welcome! This guide makes it **super easy for anyone (no coding required!)** to add or update all the main parts of your portfolio—projects, work experience, education, highlights, and blogs.

---

## 🚀 Getting Started: Setup After Cloning

**1. [Clone your repo from GitHub or Lovable.]**
   - If using GitHub, run:
     ```sh
     git clone <YOUR_GIT_URL>
     cd <YOUR_PROJECT_NAME>
     ```

**2. [Install all the project dependencies.]**
   ```sh
   npm install
   ```

**3. [Run the development server and see your changes live!]**
   ```sh
   npm run dev
   ```
   - Visit the local URL (usually printed as `http://localhost:5173` or `http://localhost:8080`) in your browser.

If anything looks wrong or errors pop up, check your edits for typos (like extra/missing `{ }`, `[ ]`, or commas).

---

## 📂 Project Folder & File Structure

Your main content is organized in the following files/folders:

```
src/
│
├── components/
│   ├── projects/
│   │   └── projectData.ts      # 👉 Edit for Projects list
│   ├── blogData.ts            # 👉 Edit for Blog articles
│   └── ... (other components)
│
├── pages/
│   ├── About.tsx              # 👉 Edit for Highlights, Work Experience, Education
│   └── ... (other pages)
│
└── ...
docs.md                        # 👉 This help guide
```

---

## 🖥️ How to Add or Update Projects

**File:**  
`src/components/projects/projectData.ts`

Your projects appear on the "Projects" page and on the home page if featured.

### ⭐ To Add a New Project:
1. Open `projectData.ts`.
2. Find the array called `projects` (a list inside `[ ... ]`).
3. Copy any existing `{ ... }`, paste it below, and update the details:

```js
{
  name: "Weather App",
  description: "A realtime weather dashboard using open APIs.",
  techStack: ["React", "Tailwind", "OpenWeatherMap"],
  year: 2025,
  image: "https://images.unsplash.com/photo-...jpg",
  github: "https://github.com/yourname/weather-app", // optional
  live: "https://weather-app.example.com",           // optional
  videoUrl: "https://..."                            // optional
}
```
- **name** — Your project’s title *(required)*
- **description** — Short, catchy summary *(required)*
- **techStack** — Tools/technologies used, as an array *(required)*
- **year** — Year finished/build *(required)*
- **image** — Project image URL *(required; use Unsplash or personal image)*
- **github/live/videoUrl** — Links *(optional)*

### ✏️ To Edit a Project:
Change any field in its `{ ... }` object.

### ❌ To Delete a Project:
Remove the whole `{ ... },` from the array.

---

## ✨ Update Your "Highlights" Section

**File:**  
`src/pages/About.tsx`

**These are the 3 colored boxes—Good at, Interested in, Work on—at the top of your About page.**

To change them:
1. Look for `<AboutHighlights ... />`.
2. Adjust the lists inside, like:

```jsx
<AboutHighlights
  goodAt={["AI", "Python"]}
  interestedAt={["Startups", "RL"]}
  workOn={["AI Projects"]}
/>
```
Add or remove items inside `[ ]`.  
**Save your changes—you’ll see them update instantly!**

---

## 💼 Update Work Experience

**File:**  
`src/pages/About.tsx`

Work experiences use a simple array.  
Add, edit, or remove jobs by following this template:

```js
const workExperience = [
  {
    title: "Data Scientist",
    org: "Tech Corp",
    location: "Remote",
    period: "2023 – 2024",
    description: "Built ML models...",
    achievements: [ "Award X" ],
    techs: [ "Python", "Pandas" ]
  },
  // ... more jobs
];
```
- Duplicate `{ ... }` to add new jobs.
- Required: `title`, `org`, `period`, and `description`.
- Optional: `location`, `achievements`, `techs`.

---

## 🎓 Update Education

**File:**  
`src/pages/About.tsx`

Education works just like Work Experience:

```js
const education = [
  {
    title: "B.S. in Computer Science",
    org: "State University",
    location: "City/Country",
    period: "2021 – Present",
    description: "Studied AI and ML.",
    achievements: [ "Scholarship" ],
    techs: [ "Python", "React" ]
  },
  // ... more entries
];
```
- Duplicate, fill in, or delete entries as needed.

---

## 📚 Update Blog Posts

**File:**  
`src/components/blogData.ts`

Blog posts also live in an array.  
Follow this format for each post:

```js
{
  title: "Why I Love AI",
  summary: "A short homepage summary...",
  tags: ["AI", "Coding"],
  image: "https://images.unsplash.com/photo-...jpg",
  date: "2024-06-10",
  url: "https://medium.com/your-article-link",
  featured: true, // true = show on home page!
}
```
- Add, edit, or remove entries as with projects.

---

## 🔗 Quick Reference Table

| Feature         | Where to edit                               | What to change            |
|-----------------|---------------------------------------------|---------------------------|
| Projects        | `src/components/projects/projectData.ts`     | `projects` array          |
| Highlights      | `src/pages/About.tsx`                       | `<AboutHighlights ... />` |
| Work Experience | `src/pages/About.tsx`                       | `workExperience` array    |
| Education       | `src/pages/About.tsx`                       | `education` array         |
| Blog Posts      | `src/components/blogData.ts`                | `blogs` array             |

---

## 💡 Tips

- If you get an error, check your commas and brackets `{ [ ] }`. Coding is picky!
- Image links: Use Unsplash, your own image, or something similar for photos.
- Save the file—refresh to see your changes.
- For further help, ask questions like “How do I...?” in Lovable chat or check [Lovable Docs](https://docs.lovable.dev/).

---

_Happy customizing your portfolio! 🚀_

