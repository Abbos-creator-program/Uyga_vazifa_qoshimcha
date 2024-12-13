console.clear();

const database = {
    studentsList: {
      xamidullo: {
        name: "xamidullo",
        age: 33,
        id: 123,
        tolov: false,
      },
    },
  
    create(user) {
      if (this.studentsList[user.name]) {
        console.log(`User with name "${user.name}" already exists.`);
        return this.studentsList;
      }
      this.studentsList[user.name] = user;
      return this.studentsList;
    },
  
    read(name) {
      return this.studentsList[name] || `User with name "${name}" not found.`;
    },
  
    update(name, user) {
      if (!this.studentsList[name]) {
        console.log(`User with name "${name}" does not exist.`);
        return this.studentsList;
      }
      this.studentsList[name] = { ...this.studentsList[name], ...user };
      return this.studentsList[name];
    },
  
    delete(name) {
      if (!this.studentsList[name]) {
        console.log(`User with name "${name}" does not exist.`);
        return;
      }
      delete this.studentsList[name];
      console.log(`User "${name}" has been deleted.`);
    },
  };
  
  console.log("After Create:");
  console.log(
    database.create({
      name: "azizbek",
      age: 21,
      id: 124,
      tolov: true,
    })
  );
  
  console.log("\nRead:");
  console.log(database.read("azizbek")); 
  
  console.log("\nUpdate:");
  console.log(
    database.update("azizbek", {
      age: 22,
      tolov: false,
    })
  );
  
  console.log("\nDelete:");
  database.delete("azizbek");
  
  console.log("\nFinal Students List:");
  console.log(database.studentsList);
  