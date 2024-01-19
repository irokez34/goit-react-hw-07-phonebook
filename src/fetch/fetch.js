// https://65aa9087081bd82e1d974405.mockapi.io/contacts/:endpoint
import axios from 'axios';

export async function getContactsApi() {
  try {
    const response = await axios.get(
      'https://65aa9087081bd82e1d974405.mockapi.io/contacts/contacts'
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export async function addNewContact() {
//   try {
//     const response = await axios({
//       method: 'post',
//       url: '/user/12345',
//       data: {
//         createdAt: '2024-01-18T18:50:59.029Z',
//         name: 'Cary Braun',
//         phone: '(766) 211-7821 x349',
//         id: '1',
//       },
//     });
//   } catch (error) {}
// }
