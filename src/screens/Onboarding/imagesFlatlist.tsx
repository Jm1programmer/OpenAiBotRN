import React, {useEffect, useRef, useState} from "react";
import { FlatList, Image } from "react-native";

const Onboarding01 = require('../../../assets/onboarding01.png')
const Onboarding02 = require('../../../assets/onboarding02.png')
const Onboarding03 = require('../../../assets/onboarding03.png')
const Onboarding04 = require('../../../assets/onboarding04.png')
const Onboarding05 = require('../../../assets/onboarding05.png')
const Images = [{
    url: Onboarding03
}, 
{
    url: Onboarding02
}, 
{
    url: Onboarding01
},
{
    url: Onboarding04
}, {
    url: Onboarding05
}
]


export default function ImagesFlatlist() {
    const [ind, setInd] = useState<number>(0)
    function changeObjectPosition() {
        if (ind < Images.length - 1) {
            setInd(prev => prev + 1)
        } else {
            setInd(0)

        }
    }
    const flatlistRef = useRef<FlatList>(null);

    useEffect(() => {
       flatlistRef.current?.scrollToIndex({index: ind})
       const Interval = setInterval(() => {
            changeObjectPosition();
       }, 3000)

       return () => clearInterval(Interval)
    }, [ind])
    return <>
        <FlatList style={{
  flexGrow: 0}}
    data={Images}
    

 
    renderItem={({ item }) => <Image source={item.url} resizeMode={'contain'} style={{width: 400, height: 400}}/> } 
    keyExtractor={({ url}) => url }
    ref={flatlistRef}
    horizontal={true}
    
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />
    </>
}