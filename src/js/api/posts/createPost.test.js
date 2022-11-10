import login from "../auth/login";
import createPost from "./create";

test("creating a post", async () => {
    await login("audun@stud.noroff.no", "Audun123");
    await createPost("title", "body", "https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?s=612x612&w=0&k=20&c=oMoz9rUr-rDhMGNmEepCkr7F1g3AXs9416hvVnT_4CI=", "tags");

})