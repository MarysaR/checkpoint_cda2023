import { 
    Resolver, 
    Query, 
    Arg,
    Mutation
} from 'type-graphql';
import { 
    Country, 
    CountryCodeInput, 
    CountryInput 
} from '../entities/countryEntity';
import countryController from "../controllers/countryController";

@Resolver(Country)
export class CountryResolver {

    // RECUPÈRE LA LISTE DES PAYS
    @Query(() => [Country])
	async getCountries(): Promise<Country[]> {
		return await countryController.getCountries();
	}

    // RECUPÈRE UN PAYS
    @Query(() => [Country])
    async getCountry(
        @Arg("CountryCodeInput") code: CountryCodeInput,
        ): Promise<Country[]> {
            return await countryController.getCountry(code);
        }

    // CRÉE UN PAYS
    @Mutation(() => Country)
    async createCountry(
        @Arg("countryInput") country: CountryInput,
    ): Promise<Country> {
        return await countryController.createCountry(country);
    }
}

export default CountryResolver;
