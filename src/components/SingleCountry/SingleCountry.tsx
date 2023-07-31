import * as C from './styles';
import {SingleCountryTS } from '../../types/SingleCountry';
import { Link } from 'react-router-dom';
import { useForm } from '../../contexts/ThemeContext';
import { useApi } from '../../contexts/ApiContext';
import {useEffect, useState} from 'react';

export const SingleCountry = ({ 
   name,
   nativeName,
   population,
   region,
   subregion,
   capital,
   topLevelDomain,
   currencies,
   languages,
   borders,
   flag
}: SingleCountryTS) => {
   const { state } = useForm();
   const countries = useApi();
   const [borderFullNames, setBorderFullNames]=useState<string[]>([]);

   useEffect(() =>{
      const getBorderFullNames = (borderCodes: string[])=> {
         const borderCountries  = countries.filter((country: any) => borderCodes.includes(country.alpha3Code));
         const borderCountryNames = borderCountries.map((country: any)  => country.name);
         return borderCountryNames;
      };  

   })
      
}