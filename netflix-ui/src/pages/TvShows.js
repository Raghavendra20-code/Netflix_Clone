import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fecthMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

function TvShows() {
    const [isScrolled,setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
  const movies = useSelector((state)=>state.netflix.movies);
  const genres = useSelector((state)=>state.netflix.genres);

  const dispatch  = useDispatch();
  //console.log('movies',movies);
  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(()=>{
    if(genresLoaded) dispatch(fecthMovies({type:"tv"}))
  },[genresLoaded])

  window.onscroll =  () =>{
    setIsScrolled(window.pageYOffset === 0? false : true)
    return () => window.onscroll = null;
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    // console.log('currentUser',currentUser);
     //if(currentUser) navigate('/')
 })

  return (
    <Container>
        <div className='navbar'>
            <Navbar isScrolled={isScrolled}/>
        </div>
        <div className='data'>
        <SelectGenre genres= {genres} type = {"tv"}/>
            {
                movies.length ? <Slider movies={movies}/>:
                <NotAvailable/>
            }
        </div>
    </Container>
  )
}

const Container = styled.div`
.data{
    margin-top: 8rem;
    .not-available{
        text-align:center;
        color:white;
        margin-top:4rem;
    }
}`

export default TvShows