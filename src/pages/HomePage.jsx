import { useLocation } from "react-router-dom"

const HomePage = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Hi {location.state.id} welcome to the Cheatsheet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt voluptate obcaecati velit laudantium maxime, corrupti tenetur! Dolores aspernatur saepe quos atque distinctio id, ipsa velit possimus animi ex asperiores quae pariatur eos a rem vero unde voluptatibus, tempora at expedita ullam laudantium blanditiis iusto! Aut obcaecati labore accusamus vitae.</p>
        </div>
    )
}
export default HomePage