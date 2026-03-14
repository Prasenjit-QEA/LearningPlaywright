function buildTestUsers(names, roles) {
  return names.map((name, index) => {
    const username = name.toLowerCase().replace(/\s+/g, '_');

    return {
      username: username,
      email: `${username}@playwrightbatch.com`,
      role: roles[index]
    };
  });
}

const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const testUsers = buildTestUsers(names, roles);
console.log(testUsers);