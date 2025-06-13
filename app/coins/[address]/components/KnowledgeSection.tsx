/* eslint-disable react/no-unescaped-entities */
export default function KnowledgeSection() {
    return (
      <div>
        <h3 className="text-xl font-bold mb-6">Things to know about Ardor</h3>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <div>
            <h4 className="text-white font-semibold mb-2">What is ARDR Token?</h4>
            <p>
              Ardor is a multichain blockchain platform with a unique parent-child chain architecture. It is designed to 
              improve scalability and flexibility in blockchain networks. The parent Ardor chain ensures network security, 
              while the interoperable child chains enable diverse functionalities. Ardor's development is managed by Jelurida 
              Swiss SA, and it employs a proof-of-stake consensus mechanism.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2">Reasons to Buy ARDR Token</h4>
            <div className="space-y-2">
              <p>ARDR's parent-child chain approach addresses scalability and efficiency in blockchain applications.</p>
              <p>Ardor's design allows for the creation of various child chains with specific features, catering to different real-world applications.</p>
              <p>The platform utilizes proof-of-stake, which is generally more energy-efficient than proof-of-work systems.</p>
            </div>
          </div>
  
          <div>
            <h4 className="text-white font-semibold mb-2">Things to consider before buying ARDR</h4>
            <div className="space-y-2">
              <p>ARDR is down 96% from its ATH as of Jan 2024 indicating the volatile nature of the coin.</p>
              <p>As per Coinmarketcap, there is not much clarity on the supply as of January 2024.</p>
              <p>The regulatory framework surrounding cryptocurrencies is evolving, and investors should stay informed about potential regulatory changes that could impact ARDR's operations.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }