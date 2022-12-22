let currentPath = "/employee/update/6";
let path = "/employee/update/:id";

let currentPathNew;
let pathNew;

let routes = [
    { path: "/employee/update", name: "Employee" },
    { path: "/employee/update/:id", name: "Update Employee" }
];

const getRouteName = (customName) => {
  let result = currentPath.match(/\//gi);
  if (result.length >= 3) {
    currentPathNew = path.split("/");
    pathNew = currentPath.split("/").slice(0, -1).join('/')

    const currentRoute = routes.find((routes) => routes.path === pathNew);
    return currentRoute ? customName ||currentRoute.name : false;
  }
};
console.log(getRouteName('Update Employee'))
