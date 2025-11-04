const tableBody = document.querySelector('#userTable tbody');

// generating table rows

tableBody.innerHTML = '';
users.forEach((user, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <th scope="row">${index + 1}</th>
    <td>${user.first}</td>
    <td>${user.last}</td>
    <td>${user.handle}</td>
`;
tableBody.appendChild(row);
});

// table data

const users = [
  { first: 'Mark', last: 'Otto', handle: '@mdo' },
  { first: 'Jacob', last: 'Thornton', handle: '@fat' },
  { first: 'Larry', last: 'Bird', handle: '@twitter' },
];

// style selection below

const themeSelect = document.getElementById('themeSelect');
const listStyleSelect = document.getElementById('listStyleSelect');
