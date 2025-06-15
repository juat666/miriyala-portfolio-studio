
# 📝 How to Update Your Portfolio Content (Beginner's Guide)

Welcome! This guide makes it super easy for **anyone** (no coding experience needed) to change the stuff on your portfolio website—projects, work experience, education, highlights, and blogs.

---

## 📂 Folder & File Structure

Below is a simplified map of your project, showing which files you edit to update different sections:

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

- `projectData.ts` — All your Project entries.
- `blogData.ts` — Blog article data (title, summary, etc).
- `About.tsx` — Work experience, Education, and Highlights ("good at", "interested in", "work on" boxes).
- `docs.md` — This guide!

---

## 🖥️ How to Add or Update Projects

**File:**  
`src/components/projects/projectData.ts`

Your projects appear on the "Projects" page and as featured on the home page.

#### ⭐ To **add a new project**:
1. Open the file above.
2. Find the `projects` array (it’s a list of objects inside `[ ]`).
3. Copy an existing `{ ... }`, paste it just below, change the details:

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
- **name** — Title for your project (required)
- **description** — Brief description (required)
- **techStack** — Tools/tech used, as an array (required)
- **year** — Year finished (required)
- **image** — Project cover image (required)
- **github** — Link to code (optional)
- **live** — Live site link (optional)
- **videoUrl** — Demo video link (optional)

#### ✏️ To **edit a project**:  
Just find and change its fields.

#### ❌ To **delete a project**:  
Remove its whole `{ ... },` from the array.

---

## ✨ Update "Highlights" Section ("Good at", etc)

**File:**  
`src/pages/About.tsx`

At the top of the About page, you’ll see 3 boxes: Good at, Interested in, Work on. To change these:
1. In `About.tsx`, find the component called `<AboutHighlights ... />`.
2. Edit the lists for each:
```jsx
<AboutHighlights
  goodAt={["AI", "Python"]}
  interestedAt={["Startups", "RL"]}
  workOn={["AI Projects"]}
/>
```
Just add or remove items in those `[ ]`.

*Your changes appear instantly after saving!*

---

## 💼 Update Work Experience

**File:**  
`src/pages/About.tsx`

Work experiences are stored as an array:
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
  // ... more experiences
];
```
- Duplicate and edit for new jobs.
- Change fields to update.
- Remove an object (the whole `{ ... },`) to delete a job.

Only `title`, `org`, `period`, and `description` are required—the others are optional.

---

## 🎓 Update Education

**File:**  
`src/pages/About.tsx`

Similar to work, education is an array:

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
- Duplicate, edit, or delete like for work experience.

---

## 📚 Update Blog Posts

**File:**  
`src/components/blogData.ts`

Blog posts are entries in the `blogs` array:
```js
{
  title: "Why I Love AI",
  summary: "A short homepage summary...",
  tags: ["AI", "Coding"],
  image: "https://images.unsplash.com/photo-...jpg",
  date: "2024-06-10",
  url: "https://medium.com/your-article-link",
  featured: true, // Only some—true = show on home page!
}
```
- Add/edit/remove as with projects.

---

## 🔗 Quick Reference Table

| Feature         | Where to edit                               | What to change            |
|-----------------|---------------------------------------------|---------------------------|
| Projects        | `src/components/projects/projectData.ts`     | `projects` array          |
| Highlights      | `src/pages/About.tsx`                       | `<AboutHighlights ... />` |
| Work Experience | `src/pages/About.tsx`                       | `workExperience` array    |
| Education       | `src/pages/About.tsx`                       | `education` array         |
| Blogs           | `src/components/blogData.ts`                | `blogs` array             |

---

## 💡 Tips

- Always keep `{ }` for objects and `[ ]` for lists matched—if you see an error, check brackets!
- Use Unsplash/your own links for images.
- Save file after change—see update instantly.
- For advanced help, ask “How do I…?” in Lovable or check [Lovable Docs](https://docs.lovable.dev/).

---

_Happy customizing your portfolio! 🚀_
