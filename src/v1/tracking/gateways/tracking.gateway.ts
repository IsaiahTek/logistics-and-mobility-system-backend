@WebSocketGateway()
export class TrackingGateway {
  @SubscribeMessage('locationUpdate')
  handleLocationUpdate(@MessageBody() data) {
    // save to Redis
  }
}
