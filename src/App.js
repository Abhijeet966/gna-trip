import React from "react";
import "./App.css";
import Container from "./component/Container";
import { useState, useEffect } from "react";
const data = [
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    place_name: "Hotel Alpha",
    location: "City X",
    review: 4.2,
    category_type: "Tours",
    free_cancellation: true,
    amount: 120,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    place_name: "Resort Beta",
    location: "City Y",
    review: 4.8,
    category_type: "attraction",
    free_cancellation: false,
    amount: 200,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Historical Tours Mu",
    location: "City G",
    review: 4.3,
    category_type: "Tours",
    free_cancellation: false,
    amount: 110,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Amusement Park Nu",
    location: "City H",
    review: 4.5,
    category_type: "attraction",
    free_cancellation: true,
    amount: 180,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Mountain Retreat Xi",
    location: "City J",
    review: 4.7,
    category_type: "outdoor",
    free_cancellation: true,
    amount: 160,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Concert Venue Omicron",
    location: "City K",
    review: 4.4,
    category_type: "outdoor",
    free_cancellation: false,
    amount: 90,
  },
  {
    image_url:
      "https://picsum.photos/seed/picsum/200/https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Hotel Alpha",
    location: "City X",
    review: 4.2,
    category_type: "Tours",
    free_cancellation: true,
    amount: 120,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Resort Beta",
    location: "City Y",
    review: 4.8,
    category_type: "attraction",
    free_cancellation: false,
    amount: 200,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Historical Tours Mu",
    location: "City G",
    review: 4.3,
    category_type: "Tours",
    free_cancellation: false,
    amount: 110,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Amusement Park Nu",
    location: "City H",
    review: 4.5,
    category_type: "attraction",
    free_cancellation: true,
    amount: 180,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Hotel Alpha",
    location: "City X",
    review: 4.2,
    category_type: "Tours",
    free_cancellation: true,
    amount: 120,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Resort Beta",
    location: "City Y",
    review: 4.8,
    category_type: "attraction",
    free_cancellation: false,
    amount: 200,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Historical Tours Mu",
    location: "City G",
    review: 4.3,
    category_type: "Tours",
    free_cancellation: false,
    amount: 110,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Amusement Park Nu",
    location: "City H",
    review: 4.5,
    category_type: "attraction",
    free_cancellation: true,
    amount: 180,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1678297270837-990c65fd1b64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Mountain Retreat Xi",
    location: "City J",
    review: 4.7,
    category_type: "outdoor",
    free_cancellation: true,
    amount: 160,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1687960116802-a9a05891d33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Concert Venue Omicron",
    location: "City K",
    review: 4.4,
    category_type: "Daytrips",
    free_cancellation: false,
    amount: 90,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Luxury Hotel Alpha",
    location: "City P",
    review: 4.5,
    category_type: "Daytrips",
    free_cancellation: true,
    amount: 300,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Beach Resort Delta",
    location: "City Q",
    review: 4.2,
    category_type: "Daytrips",
    free_cancellation: false,
    amount: 250,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1567197427669-a0d3603a3586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGhvdGVsfGVufDB8fDB8fHww",
    place_name: "Wildlife Safari Epsilon",
    location: "City R",
    review: 4.8,
    category_type: "Daytrips",
    free_cancellation: true,
    amount: 350,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1614568112072-770f89361490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    place_name: "Skydiving Adventure Zeta",
    location: "City S",
    review: 4.6,
    category_type: "Daytrips",
    free_cancellation: true,
    amount: 180,
  },
  {
    image_url:
      "https://picsum.photos/seed/picsum/200/300https://images.unsplash.com/photo-1561501878-aabd62634533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    place_name: "Historic Mansion Theta",
    location: "City T",
    review: 4.3,
    category_type: "attraction",
    free_cancellation: false,
    amount: 220,
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    place_name: "Concert Plaza Kappa",
    location: "City U",
    review: 4.7,
    category_type: "attraction",
    free_cancellation: true,
    amount: 120,
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1537833633404-f02da1734a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    place_name: "Wildlife Safari Epsilon",
    location: "City R",
    review: 4.8,
    category_type: "consershow",
    free_cancellation: true,
    amount: 6000,
  },
];

function App() {
  const [list, setList] = useState([]);
  const [dataToshow, setDataToShow] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const itemPerPage = 2;

  const [type, setType] = useState({
    Tours: false,
    attraction: false,
    consershow: false,
    Daytrips: false,
    outdoor: false,
  });

  function handleCheck(e) {
    console.log("testing");
    let t = { ...type };
    const data = e.target.value;
    t[data] = !t[data];
    // console.log(t);
    setType(t);
  }
  useEffect(() => {
    const a = { ...type };
    const ans = Object.keys(a).filter((e) => {
      return a[e] == true;
    });
    const tr = [...data];
    const newD = tr.filter((e) => {
      return ans.includes(e.category_type);
    });
    console.log(ans.length);

    if (ans.length != 0) {
      setList(newD);
      setTotalPage(newD.length / itemPerPage);
    } else {
      setList(tr);
      setTotalPage(Math.ceil(tr.length / itemPerPage));
    }
    setCurrPage(1);
  }, [type]);

  useEffect(() => {
    const startIndex = (currPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const newDataToShow = list.slice(startIndex, endIndex);
    setDataToShow(newDataToShow);
  }, [currPage, list, type, totalPage]);

  const handlePrev = () => {
    if (currPage > 1) {
      setCurrPage((prePage) => prePage - 1);
    }
  };
  const handleNext = () => {
    if (currPage < totalPage) {
      setCurrPage((prePage) => prePage + 1);
    }
  };

  return (
    <div>
      <Container
        list={dataToshow}
        handleCheck={handleCheck}
        next={handleNext}
        prev={handlePrev}
        currPage={currPage}
        totalPage={totalPage}
      />
    </div>
  );
}

export default App;
