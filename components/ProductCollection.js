<div className="container mx-auto px-4">
  <h2 className="text-2xl font-semibold text-[#354439] mb-8">Add to my Box</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div key={product.id} className="flex flex-col gap-5">
        <div className="h-60 bg-white border border-[#e7e7e7]">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-between h-[130px]">
          <div>
            <h3 className="text-[22px] font-semibold text-[#354439]">{product.name}</h3>
            <p className="text-sm font-semibold uppercase text-[#354439]/70">
              BY {product.brand}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-[#c06654]/80">from</p>
            <p className="text-[22px] font-bold text-[#c06654]">
              KSH {product.price.toFixed(2)}
            </p>
            <p className="text-xs font-bold text-[#c06654]">{product.unit}</p>
          </div>
        </div>

        <button className="flex justify-center items-center gap-1.5 px-[21px] py-2.5 rounded-[40px] bg-[#354439] text-white hover:bg-[#2a362e] transition-colors">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M5.14286 7.35714H0.857143C0.614286 7.35714 0.410714 7.275 0.246429 7.11071C0.0821429 6.94643 0 6.74286 0 6.5C0 6.25714 0.0821429 6.05357 0.246429 5.88929C0.410714 5.725 0.614286 5.64286 0.857143 5.64286H5.14286V1.35714C5.14286 1.11429 5.225 0.910714 5.38929 0.746429C5.55357 0.582143 5.75714 0.5 6 0.5C6.24286 0.5 6.44643 0.582143 6.61071 0.746429C6.775 0.910714 6.85714 1.11429 6.85714 1.35714V5.64286H11.1429C11.3857 5.64286 11.5893 5.725 11.7536 5.88929C11.9179 6.05357 12 6.25714 12 6.5C12 6.74286 11.9179 6.94643 11.7536 7.11071C11.5893 7.275 11.3857 7.35714 11.1429 7.35714H6.85714V11.6429C6.85714 11.8857 6.775 12.0893 6.61071 12.2536C6.44643 12.4179 6.24286 12.5 6 12.5C5.75714 12.5 5.55357 12.4179 5.38929 12.2536C5.225 12.0893 5.14286 11.8857 5.14286 11.6429V7.35714Z" fill="currentColor"/>
          </svg>
          Add to Box
        </button>
      </div>
    ))}
  </div>
</div> 