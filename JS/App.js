console.log('File Attached.')

// Grab The Accordian to fill in the news.
let NewsAccordian = document.getElementById('NewsAccordian');
// console.log(NewsAccordian);

// Get details about the News API 

let API_KEY = '0e6cc2e2876c439d8d46ff4699f42d0f';
let source = 'techcrunch' ;

const xhr  = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`,true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles ; 
        let newsHtml = '';
        articles.forEach(function(element, index){
            // console.log(element.title , index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        ${element.title}<span class="badge badge-primary">New</span>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#NewsAccordian">
                                <div class="card-body">${element.content} <a href=${element.url} target="_blank">Read more..</a>
                                </div>
                            </div>
                        </div>`
            newsHtml+=news;
        });
        NewsAccordian.innerHTML = newsHtml;
        // console.log(json);
    }
    else{
        console.log('Error Occured');
    }
}

xhr.send();