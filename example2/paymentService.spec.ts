import {PaymentService} from "./paymentService";
import {instance, mock, resetCalls, verify, when} from "ts-mockito"
import {ILogger} from "./ILogger";

const mockedLogger = mock<ILogger>();
when(mockedLogger.info).thenReturn(() => null);

describe('Payment service test', () => {
    beforeEach(() => {
        resetCalls(mockedLogger);
    })
    it("Should be true", () => {
        const paymentService = new PaymentService();
        paymentService.logger = instance(mockedLogger);
        expect(paymentService.sendMoney()).toBe(true);
        verify(mockedLogger.info).once();
    })
})