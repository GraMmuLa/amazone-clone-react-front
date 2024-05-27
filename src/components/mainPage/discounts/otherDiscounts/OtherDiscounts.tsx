import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import classes from "./OtherDiscounts.module.css"
import { discountTypeAPI } from "../../../../redux/api/discountTypeAPI";
import { Discounts } from "../../../../enums/discounts";
import OtherDiscountsList from "./OtherDiscountsList";
import IDiscountType from "../../../../interfaces/IDiscountType";

const OtherDiscounts: React.FunctionComponent<{ discountTypes: IDiscountType[] }> = ({ discountTypes }) => {

    return (
        <Tabs>
            <TabList className={classes.discounts__nav}>
                {discountTypes.map(discountType =>
                    <Tab className={`${classes.discounts__navItem} ${classes.buttonLink}`}
                        key={discountType.id}
                        id={`${discountType.id}`}>{discountType.type}</Tab>)
                }
            </TabList>
            {discountTypes.map(discountType => (
                discountType.id &&
                <TabPanel key={discountType.id}>
                    <OtherDiscountsList discountType={discountType} />
                </TabPanel>
            ))}

        </Tabs>
    )
}

export default OtherDiscounts;