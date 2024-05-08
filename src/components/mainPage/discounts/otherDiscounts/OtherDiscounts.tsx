import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import classes from "./OtherDiscounts.module.css"
import {discountTypeAPI} from "../../../../redux/api/discountTypeAPI";
import {Discounts} from "../../../../enums/discounts";
import OtherDiscountsList from "./OtherDiscountsList";

const OtherDiscounts: React.FunctionComponent = () => {

    const {data: discountTypes, isLoading} = discountTypeAPI.useFetchExceptDiscountTypeNameQuery(Discounts.dayDiscount);

    return (
        <Tabs>
            <TabList className={classes.discounts__nav}>
                { isLoading ?
                    <div>Loading...</div> :
                    discountTypes && discountTypes.map(discountType =>
                        <Tab className={`${classes.discounts__navItem} ${classes.buttonLink}`}
                             key={discountType.id}
                             id={`${discountType.id}`}>{discountType.type}</Tab>)
                }
            </TabList>
            {discountTypes && discountTypes.map(discountType => (
                <TabPanel>
                    <OtherDiscountsList discountType={discountType}/>
                </TabPanel>
            ))}

        </Tabs>
    )
}

export default OtherDiscounts;