import axios from 'axios';

const url = 'http://localhost:5000/api/heroes';

class HeroService{

    static getHeroes() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                console.log(data)
                resolve(
                    data.map(hero => ({
                        ...hero,
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

}

export default HeroService;