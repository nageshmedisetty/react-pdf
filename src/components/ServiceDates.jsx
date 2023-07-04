import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';
const ServiceDates = () => {
    return (
        <View style={styles.viewTop}>
            <View style={styles.viewrow}>
                <View style={{ display: 'flex' }} >
                    <View style={styles.headTitle}>
                        <Text style={styles.viewhd}>Service Dates</Text>
                    </View>
                    <View style={styles.headTitle}>
                        <Text style={styles.viewhd}>Pack, Load / Pick-up Dates</Text>
                    </View>
                    <View style={styles.viewleft10}>
                        <Text style={styles.lableLeft}>Actual:</Text>
                        <Text style={styles.lableRight}>6/7/2022</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Agreed (if applicable):</Text>
                        <Text style={styles.lableRight}>6/7/2022</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewrow}>
                <View style={{ display: 'flex' }} >
                    <View style={styles.headTitle}>
                        <Text style={styles.viewhd}>{" "}</Text>
                    </View>
                    <View style={styles.headTitle}>
                        <Text style={styles.viewhd}>Delivery Dates:</Text>
                    </View>
                    <View style={styles.viewleft10}>
                        <Text style={styles.lableLeft}>Delivery Date(s):</Text>
                        <Text style={styles.lableRight}>6/8/2022</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Agreed (if applicable):</Text>
                        <Text style={styles.lableRight}>6/8/2022</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ServiceDates

const styles = StyleSheet.create({
    viewTop:{
        display: 'flex', flexDirection: 'row', color: '#000',
            justifyContent: 'space-between', paddingBottom: 8, paddingTop: 8
    },
    headTitle:{
        color: "#757575", fontWeight: 500, paddingBottom: "4px", fontSize:12
    },
    lableLeft:{
        fontWeight: 500, fontSize:12
    },
    lableRight:{
        fontWeight: 500, fontSize:12, textAlign: "right"
    },
    viewleft6:{
        display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6
    },
    viewleft10:{
        display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 10
    },
    viewhd:{ 
        display: 'flex', flexDirection: 'row', justifyContent: "space-between", 
    },
    viewrow:{
        width: '50%', paddingLeft: 12, paddingRight: 12 
    }
    
});