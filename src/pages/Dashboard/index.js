import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// import { MdLocationOn, MdFavorite } from 'react-icons/md';
// import { Container, Content, Filters, Tags, Tag } from './styles';

// import Filter from './Filter';

// import { api, socket } from '~/services/api';

// const teste = [
//   {
//     name: 'Bolinha',
//     img:
//       'https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg',
//     filters: ['Cats', 'Adoption'],
//   },
//   {
//     name: 'Cebolinha',
//     img:
//       'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"',
//     filters: ['Adoption', 'Dogs'],
//   },
//   {
//     name: 'Monica',
//     img:
//       'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"',
//     filters: ['Mating', 'Dogs'],
//   },
//   {
//     name: 'Cascão',
//     img:
//       'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"',
//     filters: ['Disappear', 'Dogs'],
//   },
// ];

export default function Dashboard() {
  //   const [adoption, setAdoption] = useState(false);
  //   const [cats, setCats] = useState(false);
  //   const [disappear, setDisappear] = useState(false);
  //   const [dogs, setDogs] = useState(false);
  //   const [mating, setMating] = useState(false);
  //   const [pets, setPets] = useState(teste);

  //   const [filters, setFilters] = useState(teste);

  //   const profile = useSelector(state => state.user.profile);

  //   function filterData(filter, setFilter, content) {
  //     const data = filters.filter(pet => {
  //       for (let i = 0; i < pet.filters.length; i++) {
  //         if (pet.filters[i] === content) {
  //           console.log(filter);
  //           return !filter;
  //         }
  //       }
  //     });

  //     setFilter(!filter);

  //     setPets(data);
  //   }

  //   function returnColor(filter) {
  //     if (filter === 'Adoption') {
  //       return '#20BAA3';
  //     }

  //     if (filter === 'Cats') {
  //       return '#4501BD';
  //     }

  //     if (filter === 'Disappear') {
  //       return '#1066BD';
  //     }

  //     if (filter === 'Dogs') {
  //       return '#C24F00';
  //     }

  //     return '#BA2929';
  //   }

  //   async function handleSubmit(id) {
  //     try {
  //       const { data } = await api.get(`keys/${id}`);

  //       const messageObject = {
  //         content: 'Oi, tudo bom?',
  //         key: data.key,
  //         sender: profile.id,
  //         recipient: id,
  //       };

  //       socket.emit('sendMessage', messageObject);

  //       toast.success('Message sent successfully!');
  //     } catch (err) {
  //       const { response } = err;

  //       toast.error(
  //         response.data.error || 'Oops, server error. Try again later.'
  //       );
  //     }
  //   }

  return (
    <> </>
    // <Container>
    //   <h1>Dashboard</h1>

    //   <Content>
    //     <Filters>
    //       <Filter
    //         active={adoption}
    //         handleSubmit={() => {
    //           filterData(adoption, setAdoption, 'Adoption');
    //         }}
    //         content="Adoption"
    //       />
    //       <Filter
    //         active={cats}
    //         handleSubmit={() => {
    //           setCats(!cats);
    //         }}
    //         content="Cats"
    //       />
    //       <Filter
    //         active={disappear}
    //         handleSubmit={() => {
    //           setDisappear(!disappear);
    //         }}
    //         content="Disappear"
    //       />
    //       <Filter
    //         active={dogs}
    //         handleSubmit={() => {
    //           setDogs(!dogs);
    //         }}
    //         content="Dogs"
    //       />
    //       <Filter
    //         active={mating}
    //         handleSubmit={() => {
    //           setMating(!mating);
    //         }}
    //         content="Mating"
    //       />
    //     </Filters>

    //     <ul>
    //       {pets.map(pet => (
    //         <li>
    //           <button type="submit">
    //             <MdFavorite size={15} />
    //           </button>
    //           <img src={pet.img} alt="" />
    //           <div>
    //             <Tags>
    //               {pet.filters.map(filter => (
    //                 <Tag color={returnColor(filter)}>{filter}</Tag>
    //               ))}
    //             </Tags>
    //             <strong>{pet.name}</strong>
    //             <p>
    //               <MdLocationOn color="#bb2929" size={18} />
    //               Recife - PE <strong>(3.6 km)</strong>
    //             </p>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </Content>
    // </Container>
  );
}
