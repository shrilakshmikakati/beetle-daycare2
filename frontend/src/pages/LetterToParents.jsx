import React from 'react';
import './PageLayout.css';

const LetterToParents = () => {
  return (
    <div className="page-container container" style={{display: 'block'}}>
      <div className="page-content" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Letter to Parents</h1>
        <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#555', marginBottom: '40px'}}>Dear Baby Parents, Welcome to the "Beetle Babies"!</p>
        
        <div style={{backgroundColor: '#fff', padding: '40px', borderRadius: '8px', border: '1px solid #eaeaea', boxShadow: '0 4px 20px rgba(0,0,0,0.02)'}}>
          <p style={{marginBottom: '30px', fontSize: '1.05rem', lineHeight: '1.6'}}>To help make the transition from home to child care easier, we have developed a list of supplies your baby will need:</p>
          
          <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
            <tbody>
              <tr style={{borderBottom: '1px solid #eee'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', width: '25%', color: '#000'}}>Diapers</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>Most parents bring one large package a time. We will store them and let you know when they need more. Your baby will be changed every two hours or as needed.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Wipes</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>A package of wipes will last your baby about two weeks. We can store these as well if your purchase a large package. We will also let you know when your baby will need more.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Bottles</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>You will need to supply pre-made bottle each day your baby is with us. Four or five bottles (depending on your baby's appetite and length of stay each day) should be adequate. All used and unused bottles will be sent home each day to be washed/sanitized.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Formula/Food</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>We must have extra formula or breast milk available to us for emergencies. All food formulas should be prepared by parents. Lunch is also prepared by parents if the your child is 1 year old or more, or is already eating all table foods for lunch.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Cups</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>Once your baby has started using a "sippy" cup, please send three each day that your baby is with us. These will also be sent home each day to be washed/sanitized.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Shoes</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>Please bring indoor shoes and socks for your baby every day they come to day care.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Clothes/Bibs</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>Two extra outfits should be sufficient for any spit-ups or diaper leaks or any other unforeseen messiness. Bibs are great for the teething or drooling phase.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Blanket</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>You should provide sheets for your baby's crib. You have to launder these items at the end of each week.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Nuk/Pacifier</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>One nuk is fine but two are better if your baby uses one regularly. We will keep at least one labeled nuk in our class room.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd'}}>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Diaper Cream</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>OTC diaper rash ointment or a prescription cream (with a medication form) can be used.</td>
              </tr>
              <tr>
                <td style={{fontWeight: '700', padding: '20px 15px', color: '#000'}}>Baby Photo</td>
                <td style={{padding: '20px 15px', color: '#444', lineHeight: '1.5'}}>Please bring one baby or family photo for us to display in our class room.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LetterToParents;
