
async function disdata1() {
  let url = ('https://api.npoint.io/e6c945bcf1c18de6030b')
  const response = await fetch(url);
    const data = await response.json();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML="";
    

    for (const user of data) {
        const userCard = document.createElement('div');
        userCard.classList.add("card")
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>age: ${user.age}</p>
          <p>prof:${user.profession}</p><hr><br>
        `;
        outputDiv.appendChild(userCard);
    }
}





async function disdata2() {
  const response1 = await fetch('json.json');
    const data1 = await response1.json();
    const outputDiv1 = document.getElementById('output1');
    outputDiv1.innerHTML="";

    for (const user1 of data1) {
        const userCard = document.createElement('div');
        userCard.classList.add("card1")
        userCard.innerHTML = `
          <h3>${user1.name}</h3>
          <p>Email: ${user1.email}</p>
          <p>age: ${user1.age}</p>
          <p>prof:${user1.profession}</p><hr><br>
        `;
        outputDiv1.appendChild(userCard);
    }
}
