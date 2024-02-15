import PokemonCard from "@/app/components/PokemonCard"
import styles from './page.module.css'

export default async function page({params}){

    return(
        <div className={styles.main} >
            <PokemonCard pokenumber={params.id} />
        </div>
    )
} 