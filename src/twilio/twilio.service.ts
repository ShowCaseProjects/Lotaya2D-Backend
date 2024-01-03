// twilio.service.ts

import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class TwilioService {
  private readonly twilioClient: Twilio.Twilio;
  protected readonly logger:Logger;
  constructor() {
    this.twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    this.logger = new Logger(TwilioService.name);
  }

  async sendOtpCode(phoneNumber: string, otpCode: string): Promise<void> {
    try {
      const message = await this.twilioClient.messages.create({
        to: phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
        body: `Your OTP code is: ${otpCode}`,
      });

      this.logger.log(`OTP sent to ${phoneNumber}: ${message.sid}`);
    } catch (error) {
      this.logger.error(`Error sending OTP to ${phoneNumber}:`, error);
      throw new HttpException({
       errorCode:'E1000',
       errorMessage:'Twilio Service Error.'
      },HttpStatus.BAD_REQUEST);
    }
  }
}
