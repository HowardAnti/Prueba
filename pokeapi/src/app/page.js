
import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {


  /**<PokemonCard pokenumber={2} />*/ 
  return (
    <main className={styles.main} >
        <Link href={"/pages/PokemonList"}>Lista Pokemon</Link>
    </main>
  );
}
