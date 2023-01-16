const puppetter = require('puppeteer');

const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

exports.get = async (req, res) => {

  async function webscrap() {
    const browser = await puppetter.launch({headless: true});
    const page = await browser.newPage();
  

    await page.goto(url);

    const data = await page.evaluate(() => {
        const itens = document.querySelectorAll('.thumbnail');
        const products = Array.from(itens);
       

        return products.filter(product => {
          return product.querySelector('.title').innerText.toLowerCase().includes('lenovo');
        }).map(product => {
            const title = product.querySelector('.title').innerText;
            const price = product.querySelector('.price').innerText;
            const description = product.querySelector('.description').innerText;
            return { title, price, description };
        });
      })    

    console.log(data);
    res.json(data);


    await page.close();    
  }

  webscrap();
}

