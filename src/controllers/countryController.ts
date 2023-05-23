import dataSource from "../lib/dataSource";
import {
	Country,
	CountryInput,
    CountryCodeInput
} from "../entities/countryEntity";

const countries = dataSource.getRepository(Country);

// RECUPÈRE UNE LISTE DES PAYS
const getCountries = async (): Promise<Country[]> => {
	return await countries.find();
};

// RECUPÈRE UN CODE PAYS
const getCountry = async ({ code }: CountryCodeInput): Promise<Country[]> => {
	return await countries.find({
		where: {
			code,
		},
	});
};

// CRÉE UN PAYS
const createCountry = async (country: CountryInput): Promise<Country> => {
	const newCountry = await countries.save(country);
	return newCountry;
};

export default { getCountries, getCountry, createCountry };