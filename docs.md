
# 📝 How to Update Your Portfolio Content (Beginner's Guide)

Welcome! This guide will help **anyone** update, add, or remove content in your portfolio—including Projects, Work Experience, Education, Highlights, and Blogs—using simple steps. No coding experience needed!

---

## 🖥️ How to Add or Update Projects

Projects are listed on the Projects page and showcased on the home page.

**File to Edit:**  
`src/components/projects/projectData.ts`

### ⭐ To **add a new project**:
1. **Open** the file above.
2. **Find** the `projects` array. Each project is an object (`{ }`) inside `[ ]` like this:
   ```js
   {
     name: "Smart Agent",
     description: "A reinforcement learning agent...",
     techStack: ["Python", "PyTorch", "RL"],
     year: 2024,
     image: "https://...",
     github: "https://...",
     live: "https://...",
     videoUrl: "https://...", // Optional
   },
   ```
3. **Copy an existing project**, paste it below (inside the array), and change the fields to match your new project.
    - **name** (required): The project title.
    - **description** (required): Short about the project.
    - **techStack** (required): Technologies (as array).
    - **year** (required): Year completed.
    - **image** (required): Image URL for cover.
    - **github**: Link to code (optional).
    - **live**: Link to live site (optional).
    - **videoUrl**: Link to demo video (optional).

#### Example:
```js
{
  name: "Weather App",
  description: "A realtime weather dashboard using open APIs.",
  techStack: ["React", "Tailwind", "OpenWeatherMap"],
  year: 2025,
  image: "https://images.unsplash.com/photo-...jpg",
  github: "https://github.com/yourname/weather-app",
  live: "https://weather-app.example.com",
}
```

### ✏️ To **edit a project**:  
Find the project you want, change its info, and save!

### ❌ To **delete a project**:  
Delete its whole object (`{ ... },`) from the array.

---

## ✨ How to Edit the "Highlights" Section 

This covers “Good at”, “Interested at”, and “Work on” boxes at the top of the About page.

**File to Edit:**  
`src/pages/About.tsx`

1. **Find** the `AboutHighlights` component:
   ```jsx
   <AboutHighlights
     goodAt={[ "Item 1", "Item 2", ... ]}
     interestedAt={[ "Item 1", ... ]}
     workOn={[ "Item 1", ... ]}
   />
   ```
2. **Change** the lists (`[ ]`) for each as you wish.  
   - Just add, remove, or edit the strings.

*You’ll see the boxes update instantly when you save!*

---

## 💼 How to Add or Edit Work Experience

**File to Edit:**  
`src/pages/About.tsx`

1. **Locate** the `workExperience` array:
   ```js
   const workExperience = [
     {
       title: "Your Job Title",
       org: "Company Name",
       location: "City/Country or Remote",
       period: "2023 – 2024",
       description: "What you did.",
       achievements: [ "Achievement 1", "Achievement 2" ],
       techs: [ "Tech 1", "Tech 2" ]
     },
     // ... more experiences
   ];
   ```
2. **To add new experience**:  
   - Copy an existing one, paste below, and edit fields.
3. **To edit**:  
   - Just change any text.
4. **To delete:**  
   - Remove its object from the array.

*All fields except `title`, `org`, `period`, and `description` are optional.*

---

## 🎓 How to Add or Edit Education

**File to Edit:**  
`src/pages/About.tsx`

1. **Locate** the `education` array:
   ```js
   const education = [
     {
       title: "Degree or Program",
       org: "Institution Name",
       location: "City/Country or Remote",
       period: "2021 – Present",
       description: "Short summary.",
       achievements: [ "Achievement 1" ],
       techs: [ "Skill 1", "Skill 2" ]
     },
     // ... more education items
   ];
   ```
2. **Add, edit, or remove** entries like in Work Experience.

*Again, only `title`, `org`, `period`, and `description` are required.*

---

## 📚 How to Add or Edit Blog Posts

Blog articles are shown on the Blog page and as featured on the home page.

**File to Edit:**  
`src/components/blogData.ts`

### To **add a new blog post**:
1. **Locate the `blogs` array** in the file.
2. **Copy and update** an existing object:
    ```js
    {
      title: "Blog Post Title",
      summary: "A short summary for the homepage card...",
      tags: ["AI", "Coding"],
      image: "https://images.unsplash.com/photo-...jpg",
      date: "2024-06-10",
      url: "https://medium.com/your-article-link",
      featured: true, // Use true if you want to show this on homepage
    }
    ```
   - `featured: true` makes it show on the homepage. Only some posts should have this!

### To **edit**:  
Change a field’s text.

### To **remove**:  
Delete the blog’s object from the array.

---

## 🔗 Summary Table

| Feature         | Where to edit                               | What to change                    |
|-----------------|---------------------------------------------|------------------------------------|
| Projects        | `src/components/projects/projectData.ts`     | Edit the `projects` array          |
| Highlights      | `src/pages/About.tsx`                       | Edit `<AboutHighlights ... />`     |
| Work Experience | `src/pages/About.tsx`                       | Edit the `workExperience` array    |
| Education       | `src/pages/About.tsx`                       | Edit the `education` array         |
| Blog Posts      | `src/components/blogData.ts`                | Edit the `blogs` array             |

---

## 💡 Tips

- Always keep object brackets `{ }` and array brackets `[ ]` matched when editing.
- If you paste image links, use Unsplash or your own links.
- Save files after changes—updates show up instantly.
- For bigger changes, you can always ask “How do I…?” here or check [Lovable Docs](https://docs.lovable.dev/).

---

Happy customizing your portfolio! 🚀
