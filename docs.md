
# How to Update or Add Work Experience & Education

You can easily add, edit, or remove Work Experience and Education items using React properties and components!

---

## ✨ Add or Update "Highlights" Section (Good at, Interested at, Work on)

You can personalize the top section of your About page (the “I am good at”, “I am interested at”, and “I work on” cards) by editing the `AboutHighlights` component props inside `src/pages/About.tsx`.

1. Open `src/pages/About.tsx`.

2. Find the `AboutHighlights` component, which looks like this:
   ```jsx
   <AboutHighlights
     goodAt={[
       "Python & TypeScript",
       "Machine Learning",
       "React & Frontend",
       "Problem Solving",
     ]}
     interestedAt={[
       "Reinforcement Learning",
       "AI Product Design",
       "MLOps & scalability",
       "Effective Teamwork",
     ]}
     workOn={[
       "Startup XYZ (ML Intern)",
       "Student Research Clubs",
       "Hackathons & Open Source",
     ]}
   />
   ```

3. **To edit highlight lists:**
   - Change, add, or remove items in any of the `goodAt`, `interestedAt`, or `workOn` props.
   - You can use as many items as you like in each array, and the UI will update.

4. **Save the file**—your changes will be visible immediately on the About page!

---

## 🛠️ Add or Update Work Experience

1. Open `src/pages/About.tsx`.

2. Find the `workExperience` array near the top:
   ```js
   const workExperience = [
     // each object below will be one experience card:
     {
       title: "Machine Learning Intern",
       org: "Startup XYZ",
       location: "Remote",
       period: "May 2024 – Jul 2024",
       description: "...",
       achievements: [ "Built scalable RL pipelines for simulation", ... ],
       techs: [ "Python", "TensorFlow", ... ],
     },
     // Add more below by copying this structure!
   ];
   ```

3. **To add a new experience:**  
   - Copy an existing entry and update the fields as needed.
   - Example:
     ```js
     {
       title: "Data Engineer",
       org: "Data Corp",
       location: "Bangalore, India",
       period: "2023 – 2024",
       description: "Developed advanced ETL pipelines using modern data tools.",
       achievements: [ "Improved data throughput by 40%" ],
       techs: [ "Python", "Airflow", "AWS" ]
     }
     ```

4. **To remove an experience:**  
   - Simply delete it from the array.

5. Save the file—changes will update automatically!

---

## 🎓 Add or Update Education

1. Find the `education` array in `src/pages/About.tsx`:
   ```js
   const education = [
     {
       title: "B.Tech in AI & Data Science",
       org: "Your University",
       location: "Hyderabad, India",
       period: "2022 – Present",
       description: "...",
       achievements: [ "Google AI Scholarship Recipient (2023)", ... ],
       techs: [ "Python", "TensorFlow" ]
     }
   ];
   ```

2. **To add a new education record:**  
   - Copy and edit as needed!
     ```js
     {
       title: "M.Sc Data Science",
       org: "Global University",
       location: "Remote",
       period: "2027 – 2029",
       description: "Advanced coursework in ML and AI.",
       achievements: [ "Top 5% in class" ],
       techs: [ "Keras", "Scikit-learn" ]
     }
     ```

3. **To remove an education record:**  
   - Just remove it from the array.

---

## 💡 Notes

- All fields are optional except `title`, `org`, `period`, and `description`.
- You can add as many entries as you need—the cards will appear automatically.
- If you want to customize the look of these cards, edit the corresponding files:
  - `src/components/WorkExperienceItem.tsx`
  - `src/components/EducationItem.tsx`
---

Happy editing! 🚀

