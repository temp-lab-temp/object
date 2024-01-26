import { Money } from "../../money/Money";
import { TMovieType } from "./MovieType";
import { DiscountCondition } from "./discountCondition";

export class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditons: DiscountCondition[];

  private movieType: TMovieType;
  private discountAmount: Money;
  private discoutPercent: number;

  getMovieType(): TMovieType{
    return this.movieType;
  }

  setMovieType(movieType: TMovieType){
    this.movieType = movieType;
  }

  getFee(): Money{
    return this.fee;
  }

  setFee(fee: Money) {
    this.fee = fee;
  }

  getDiscountConditions():DiscountCondition[] {
    return this.discountConditons;
  }

  setDiscountConditions(discountConditions: DiscountCondition[]) {
    this.discountConditons = [...discountConditions];
  }

  getDiscountAmount(): Money{
    return this.discountAmount;
  }

  setDiscountAmount(discountAmount: Money) {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discoutPercent;
  }

  setDiscountPercent(discountPercent: number) {
    this.discoutPercent= discountPercent;
  }


}