export default function post({ data }) {
  // Render data...
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('../testDB/user.js')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}