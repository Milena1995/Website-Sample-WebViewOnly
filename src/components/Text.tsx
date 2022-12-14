import React from "react";
import {TextProps} from "app-studio";
import {Text} from "app-studio";
import Typography from "../configs/TypographyConfig.json";

 export const H2Bold = (props: TextProps) => (<Text {...Typography.H2Bold} {...props}/>);
 export const H2lBold = (props: TextProps) => (<Text {...Typography.H2lBold} {...props}/>);
 export const H3Medium = (props: TextProps) => (<Text {...Typography.H3Medium} {...props}/>);
 export const H3Bold = (props: TextProps) => (<Text {...Typography.H3Bold} {...props}/>);
 export const Title = (props: TextProps) => (<Text {...Typography.Title} {...props}/>);
 export const SubTitle = (props: TextProps) => (<Text {...Typography.SubTitle} {...props}/>);
 export const FormLabel = (props: TextProps) => (<Text {...Typography.FormLabel} {...props}/>);
 export const IconListValue = (props: TextProps) => (<Text {...Typography.IconListValue} {...props}/>);
 export const StatisticLabel = (props: TextProps) => (<Text {...Typography.StatisticLabel} {...props}/>);
 export const StatisticValue = (props: TextProps) => (<Text {...Typography.StatisticValue} {...props}/>);
