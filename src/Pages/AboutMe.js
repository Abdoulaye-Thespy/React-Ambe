import React from 'react';
import  MyNav from '../containers/Nav'
import MyParallax from '../containers/MyParallax'
import Header from '../components/Headers';
import Footer from '../containers/Footer';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

export default function AboutMe() {
  return (

    <div className='body'>
    <MyNav />
    <MyParallax />
    <Container>
    <Header value='Ambe la star'/>
     <Row>
        <Col className='text-about-me'>
            <p className='text-white first-paragraph-about-me montserat-font'>Ambe Tenbong, better known by his artistic name “Ambe” is a Cameroonian Musician who hails from the northwest region of Cameroon. Ambe has been in the limelight of the Cameroonian and African music industries for over a decade. At the dawn of his musical career in the mid-2000s, he was called Denzyl. He has played a significant role in the promotion of the Anglophone music Industry in Cameroon from his musical debut. </p>
            <p className='text-white montserat-font'>He had the desire to succeed in his musical career and for this, he made the effort to ensure the blooming and growth of his profession through hard work and determination, taking bold steps, and making calculated decisions. His pursuit of success saw him travel to Nigeria where in 2008 he released his first studio Album titled “E don Blow”. This Album was the first milestone of his musical career. </p>
            <p className='text-white montserat-font'>His aspirations about getting to the zenith of his career saw him make several journeys out of the country where he made and signed some deals that helped to boost his career. From then on he released a good number of songs in singles and in albums. As a result, he released his first hit song in 2014 titled “Rendezvous”. This release hit the waves on radio, Tv, and social media and made Ambe a household name.</p>
            <p className='text-white montserat-font'>Still, on the rungs of the ladder to success, he made several collabos with stars like Daphne and the fantastic trio X-maleya and recently with Mani Bella titled “Better Boyfriend”,  “Petit a Petit” and "Amour et argent" respectively.</p>
            <p className='text-white montserat-font'>Toward the end of the year 2016 (not sure of the year) he released a groundbreaking hit song titled  “Bonne Annee”.  This song not only increased his media footprint but also served as homage to the land of his origins as many came to know about Bafut from the names mentioned in the lyrics. He released another hit song “Vitesse” in 2017.</p>
            <p className='text-white montserat-font'>At the end of 2018, Ambe decided to spice things up by bringing together what many today consider the greatest collabo ensemble of anglophone musicians in a remix of Bonne Annee Titled “Na For Bafut” featuring stars like; Magasco, Mr. Leo, Blanche Bailly, Tzy Panchak,  Boy Tag,  Blaise B,  Askia, and Salatiel. This is the song Ambe is best known for by many. However, his musical arsenal contains songs like; “E don blow”, “rendezvous”, “better boyfriend”, “double-double”, “petit a petit”, “bonne Annee”, “na for Bafut”, “Amour et Argent”, “Vitesse” etc.</p>
            <p className='text-white montserat-font'>As a Cameroonian star artist Ambe is well known for calling out on the promotion of Cameroonian Music because it is his heartfelt belief that in order to grow, we must promote our own and identify with our roots, and his resolve on the matter is ratified by his songs, words, and actions towards the promotion of Cameroonian Music in general and Anglophone Music in Particular.
            </p>
            <p className='text-white montserat-font'>Ambe is about to go loud again with another festive song which promises to be a hit. Put on your dancing shoes and get ready for the show, its Christmas and time for celebration.</p>
    
        </Col>
     </Row>
    </Container>
    <Footer />
    
    </div>
  );
}
