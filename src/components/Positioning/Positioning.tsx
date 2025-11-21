const Positioning = () => {
    return (
      <section className="positioning section container">
        <div className="positioning-left">
          <h2 style={{textAlign:"center"}}>“We don’t replace your doctors. We walk with you between them.”</h2>
          <p style={{maxWidth:680, margin:'12px auto 0', textAlign:'center'}}>
            You are the non-clinical support system every cancer patient needs — the clarity, structure, 
            emotional safety, guidance, and daily stability.
          </p>
        </div>
        <div className="positioning-right">
          <img
            className='para-image'
            src="/illustrations/support.svg" 
            alt="Supportive illustration"
          />
        </div>
      </section>
    );
  };
  
  export default Positioning;
  