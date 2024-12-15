async function fetchUserData() {
  const url = "https://api.github.com/users/{username}";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
  if (fetchUserData) {
    print("Loading...")
  }else{
    print("Looks like we cant find the user")
  }
}
export default fetchUserData();