const request = require('request');
const expect = require('chai').expect;

describe('Cat Unit Test', function() {
    url = "http://localhost:3000/api/cat"

    describe('POST Cat', () => {
        it('should create a new cat', (done) => {
          const postData = {
            id: '1',
            name: 'My Cat'
          };
      
          request.post({
            url: url,
            json: postData
          }, (error, response, body) => {
            if (error) {
              done(error);
              return;
            }
      
            const responseData = body;
            expect(response.statusCode).to.equal(200);

            expect(responseData.message).to.equal("post cat success")
      
            done();
          });
        });
      });
  
    describe('GET Cat', () => {
        it('should return cats', (done) => {
          request.get(url, (error, response, body) => {
            if (error) {
              done(error);
              return;
            }
    
            expect(response.statusCode).to.equal(200);
            const responseData = JSON.parse(body);

            expect(responseData.message).to.equal("get cat success")
      
            //expect(responseData.data[0]["id"]).to.equal("1");
            //expect(responseData.data[0]["name"]).to.equal("My Cat");
            done();
          });
        });
      });

      describe('Delete Cat', () => {
        it('should delete a cat', (done) => {
          const deleteData = {
            id: '1',
            name: 'My Cat'
          };
      
          request.delete({
            url: url,
            json: deleteData
          }, (error, response, body) => {
            if (error) {
              done(error);
              return;
            }
      
            const responseData = body;
            expect(response.statusCode).to.equal(200);

            expect(responseData.message).to.equal("delete cat success")
      
            done();
          });
        });
      });
});