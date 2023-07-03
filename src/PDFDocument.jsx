import React, { useEffect, useState } from 'react'
import { PDFViewer, Font, Page, Document, StyleSheet } from '@react-pdf/renderer';
import { Header, MoverSection, Divider, CustomerSection, ServiceDates, DigitalSignatureSection, ValuationDeclaration, WeightCharges } from './components'
import TermsPage from './components/TermsPage'
import TermsPageTwo from './components/TermsPageTwo'
import TermsPageThree from './components/TermsPageThree';
import axios from 'axios';

const PDFDocument = () => {
    const [getData, setData] = useState({})
    
    useEffect(() => {
        fetchFormList().then((data) => {
            console.log(typeof data)
            console.log(data.data.customer_details.cid)
        //    let stshsh= JSON.parse(data)
        //    console.log(stshsh)
          setData(data);  
        }).catch((error) => {
          console.error(error);
        });
      }, []);

    const fetchFormList = async () => {
        return axios.get("./data/pdfdata.json")
          .then((response) => {
            return response.data;      
          })
          .catch((err) => {  
            console.log("Error",err)    
            throw err[1];      
          });
    }
    return (
        <PDFViewer style={styles.viewer}>
            <Document>                
                <Page style={styles.body}>
                    <MoverSection data={getData}/>
                    <Divider />
                    <CustomerSection data={getData} />
                    <Divider />
                    <ServiceDates data={getData} />
                    <Divider />
                    <DigitalSignatureSection data={getData} />
                    <ValuationDeclaration data={getData} />
                    <WeightCharges data={getData} />
                    <TermsPage data={getData} />
                    <TermsPageTwo data={getData} />
                    <TermsPageThree data={getData} />
                </Page>
            </Document>
        </PDFViewer >
    )
}

export default PDFDocument

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
    viewer: {
        width: "100vw", //the pdf viewer will take up all of the width and height
        height: "100vh",
    },
    body: {
        fontSize: 12,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});