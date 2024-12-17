function skillsMember() {
  return {
    name: 'skillsMember',
    template: `
      <div>
        <h3>Skills</h3>
        <ul>
          <li v-for="skill in skills">{{ skill }}</li>
        </ul>
      </div>
    `,
    data() {
      return {
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React.js']
      }
    }
  }
}