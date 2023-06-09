import React from 'react';
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import {Container} from "@mui/material";
import myImage from "../public/green-tiles.jpg"
import CardMedia from '@mui/material/CardMedia';
import {Image}from 'mui-image'
import ReactDOMServer from "react-dom/server";
import Box from "@mui/material/Box";
import { sizing } from '@mui/system';
import styled from "styled-components";
const Create = () => {

    return (
        // <div  style={{ backgroundImage: "url(${/imageUrl})"}}>
        //
        //     {/*<ResponsiveAppBar></ResponsiveAppBar>*/}
        //     {/*<Container style={{ marginTop: '100px' }} maxWidth="lg">*/}
        //     {/*    <h1 style={{textAlign: "center"}}>Create a Tea Club</h1>*/}
        //     {/*    */}
        //     {/*</Container>*/}
        // </div>
        <StyledBox>
            <div style={{backgroundColor: "NavajoWhite", textAlign: "center", fontSize: 120}}>Create a Tea Club</div>
        </StyledBox>
    );
};

const StyledBox = styled(Box)`
  height:100vh;
  width:100vw;
  left: 0;
  top: 0;
  position: relative;
  background-repeat: repeat;
  background-image: url(${myImage.src});
  color: SaddleBrown;
`


export default Create;