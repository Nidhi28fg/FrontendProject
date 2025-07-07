import axios from "axios";
// axios use for fetching data from api
export default async function User() {
  const res = await axios.get('http://localhost:3000/api/v1/user/detail')
        const user = res.data;
    return (
        <div>                <div key={user.id}>
                    <h1>{user.title}</h1>
                </div>
                    </div>

    )
}

