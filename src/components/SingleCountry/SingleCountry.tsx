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

      const fetchBordderFullNames = () =>{
         if (borders &&  borders.length > 0) {
            const fullNames = getBorderFullNames(borders);
            setBorderFullNames(fullNames);
         }
      };
      fetchBordderFullNames();
   },[borders, countries]);
   
   return (
      <C.CountryData theme={state.theme}>
         <img src={flag} alt={`Country: ${name}`} />
         <div className='data--area'>
            <h1>{name}</h1>
            <div className='data--firstArea'>
               <p><span>Native Name : </span>{nativeName}</p>
               <p className='topLevel'><span>Top Level Domain: </span>{topLevelDomain}</p>
               <p><span>Population: </span>{' '}{population.toLocaleString()}</p>
            {currencies &&
               <p><span>currencies</span>{currencies.map(item => item.name)}</p>
            }
            </div>
         </div>
      </C.CountryData>
   )   
}